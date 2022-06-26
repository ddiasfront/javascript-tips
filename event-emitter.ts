type MapListener = Record<string, Listener[]>;
type Listener = (value: any) => void;

class EventEmitter {
    private mapListener: MapListener = {};
    public on(eventName: string, listener:  Listener): void {
        const listeners  = this.eventExist(eventName) 
        ? this.mapListener[eventName] 
        : [];

        this.mapListener[eventName] = [...listeners, listener]
    }

    private eventExist(eventName: string): boolean {
        return eventName in this.mapListener; 
    }
}