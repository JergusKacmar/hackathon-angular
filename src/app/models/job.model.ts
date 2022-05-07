export interface Job {
    key?: string | null;
    title?: string;
    state?: string;
    category?: string;
    employer?: string;
    duration?: number;
    expireOn?: Date;
    description?: string;
    geoLat?: number;
    geoLon?: number;
    payment?: number;
    employee?: string;
}