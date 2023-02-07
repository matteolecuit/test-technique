export interface LaposteHexasmalModel {
  datasetid: string;
  recordid: string;
  fields: LaposteHexasmalFields;
}

export interface LaposteHexasmalFields {
  nom_de_la_commune: string;
  libelle_d_acheminement: string;
  code_postal: string;
  coordonnees_gps: number[];
  code_commune_insee: string;
}
