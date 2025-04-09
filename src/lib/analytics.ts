import { getCookie, setCookie } from './cookies';

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
  id?: string;
}

export interface AnalyticsConfig {
  batchSize: number;
  compressionEnabled: boolean;
}

export class Analytics {
  private static instance: Analytics;
  private events: AnalyticsEvent[] = [];
  private config: AnalyticsConfig = {
    batchSize: 50,
    compressionEnabled: true
  };

  private constructor() {
    this.loadPersistedEvents();
    this.setupAutoPersist();
  }

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  private setupAutoPersist(): void {
    // 1分ごとにイベントを自動保存
    setInterval(() => {
      this.persistEvents();
    }, 60000);

    // ページを離れる前にイベントを保存
    window.addEventListener('beforeunload', () => {
      this.persistEvents();
    });
  }

  configure(config: Partial<AnalyticsConfig>): void {
    this.config = { ...this.config, ...config };
  }

  async trackEvent(event: AnalyticsEvent): Promise<void> {
    try {
      const eventWithId = {
        ...event,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      };
      this.events.push(eventWithId);

      if (this.events.length >= this.config.batchSize) {
        await this.persistEvents();
      }
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  }

  private async persistEvents(): Promise<void> {
    const consent = getCookie('analytics-consent');
    if (consent === 'true') {
      try {
        const eventsToStore = this.config.compressionEnabled
          ? await this.compressEvents(this.events)
          : this.events;
        localStorage.setItem('analytics-events', JSON.stringify(eventsToStore));
      } catch (error) {
        console.error('Failed to persist events:', error);
      }
    }
  }

  private async compressEvents(events: AnalyticsEvent[]): Promise<AnalyticsEvent[]> {
    // 基本的な圧縮: 重複プロパティの削除とプロパティ名の短縮化
    const compressedEvents = events.map(event => {
      const { id, timestamp, name, ...properties } = event;
      return {
        i: id,
        t: timestamp,
        n: name,
        p: properties
      };
    });
    return compressedEvents as unknown as AnalyticsEvent[];
  }

  private async loadPersistedEvents(): Promise<void> {
    try {
      const storedEvents = localStorage.getItem('analytics-events');
      if (storedEvents) {
        const parsedEvents = JSON.parse(storedEvents);
        // 圧縮されたデータを展開
        this.events = parsedEvents.map((e: any) => ({
          id: e.i || e.id,
          timestamp: e.t || e.timestamp,
          name: e.n || e.name,
          properties: e.p || e.properties
        }));
      }
    } catch (error) {
      console.error('Failed to load persisted events:', error);
    }
  }

  getEvents(): AnalyticsEvent[] {
    return this.events;
  }

  clearEvents(): void {
    this.events = [];
    localStorage.removeItem('analytics-events');
  }
}

export const analytics = Analytics.getInstance(); 