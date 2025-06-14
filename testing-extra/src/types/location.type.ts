export type GeoType = {
  "lat": string,
  "lng": string,
}
export type Address = {
  "street": string,
  "suite": string,
  "city": string,
  "zipcode": string,
  "geo": GeoType,
};