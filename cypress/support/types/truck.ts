export interface Trailer {
  id: number;
  number: string;
  type: string;
  licence_plate: string | null;
  licence_state: string | null;
  licence_expire: string | null;
  model: string | null;
  vin: string | null;
  length: number;
  width: number;
  height: number;
  door_type: string | null;
  door_height: number;
  door_width: number;
  min_height: number;
  min_width: number;
  payload: number;
  year: number | null;
  equipment: any[];
  additional_equipment: any[];
}

export interface Truck {
  id: number;
  number: string;
  type: string;
  color: string;
  status: string;
  gross_weight: number;
  make: string;
  model: string;
  vin: string;
  licence_plate: string;
  licence_state: string;
  licence_expire: string;
  signs: boolean;
  year: number;
  owner_id: number;
  driver_id: number;
  driver2_id: number | null;
  reserved_by_id: number | null;
  reserved_till: string | null;
  trailer: Trailer;
  trailer_id: number;
  note: string;
  created_time: string;
  hired_by_id: number;
  owner: {
    id: number;
    name: string;
    is_driver: boolean;
    is_owner: boolean;
    is_coordinator: boolean;
    driver_status: string;
    owner_status: string;
    email: string;
    language: string;
    phone: string;
    full_address: string;
  };
  driver: {
    id: number;
    name: string;
    is_driver: boolean;
    is_owner: boolean;
    is_coordinator: boolean;
    driver_status: string;
    owner_status: string;
    email: string;
    language: string;
    phone: string;
    full_address: string;
    address_location: [number, number] | null;
    note: string;
    driver_note_text: string;
    contact_person: {
      id: number;
      name: string;
      is_driver: boolean;
      is_owner: boolean;
      is_coordinator: boolean;
      driver_status: string;
      owner_status: string;
      email: string;
      language: string;
      phone: string;
      full_address: string;
    };
    contact_person_id: number;
  };
  driver2: null;
  available_location_name: string | null;
  current_location_name: string | null;
  available_location: {
    coordinates: [number | null, number | null];
    city: string;
    state: string;
    zip_code: string;
    country: string;
    changed_at: string | null;
    changed_by: string | null;
    timezone: string;
    full_address: string;
  };
  available_date: string | null;
  current_location: {
    coordinates: [number | null, number | null];
    city: string;
    state: string;
    zip_code: string;
    country: string;
    timezone: string;
    full_address: string;
  };
  current_location_time: string | null;
  status_changed_by: string;
  status_changed_at: string;
  archived: boolean | null;
}

export interface TrucksResponse {
  total: number;
  page: number;
  items: Truck[];
  params: any; 
  delivery_address: string | null;
  delivery_location: any | null;
  pickup_address: string | null;
  pickup_location: any | null;
  pickup_delivery_distance: number | null;
}
