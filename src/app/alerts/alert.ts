export interface Alert {
    id: number;
    from_currency: string;
    to_currency: string;
    upper_rate: number;
    lower_rate: number;
    status: string;
    created_at: string;
}