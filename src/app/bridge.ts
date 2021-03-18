// partial type
export interface BridgeId {
    id: string;
    name: string;
}

// full type
export interface Bridge extends BridgeId {
    
    lat : number | null;
    lng: number | null;
    year: number | null;
    length: number | null;
    width: number | null;
}