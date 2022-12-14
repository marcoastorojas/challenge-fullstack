export interface Country {
    country_name: string;
    country_phone_code: number;
    country_short_name: string;
}

export interface State {
    state_name: string
}

export interface UserDirection {
    address1: string
    address2: string
    city: string
    country: string
    state: string
}