import { ApiStatus } from "../../types/types"

export type CountryListReducer = {
  status: ApiStatus,
  data: Country[],
}

export type Country = {
  name: string;
  region: Region;
  flag: string;
  independent: boolean;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  AntarcticOcean = "Antarctic Ocean",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
  Polar = "Polar",
}