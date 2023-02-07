import { LaposteHexasmalModel } from "../models/laposteHexasmals.model";
import { DatabaseConnection } from "./database-connection";
import { JsonDB } from "node-json-db";

export class LaposteHexasmalDao {
  private databaseConnection: JsonDB;

  constructor() {
    // initialize database connection
    this.databaseConnection = DatabaseConnection.getConnection();
  }

  public list(): LaposteHexasmalModel[] {
    return this.databaseConnection.getData("/");
  }

  public delete(laposteHexasmalID: string): string {
    const index = this.getLaposteHexasmalIndexByCodePostal(laposteHexasmalID);
    if (index > -1) {
      this.databaseConnection.delete(`/laposteHexasmals[${index}]`);
      return laposteHexasmalID;
    }
  }

  public getByID(laposteHexasmalID: string): LaposteHexasmalModel {
    const index = this.getLaposteHexasmalIndexByCodePostal(laposteHexasmalID);
    if (index > -1) {
      return this.databaseConnection.getData(`/laposteHexasmals[${index}]`);
    }
  }

  public getLaposteHexasmalIndexByCodePostal(
    laposteHexasmalCodePostal: string
  ): number {
    const laposteHexasmal = this.databaseConnection
      .getData("/")
      .filter(
        (entry: any) => entry.fields.code_postal === laposteHexasmalCodePostal
      );
    return laposteHexasmal;
  }
  public update(laposteHexasmal: LaposteHexasmalModel): LaposteHexasmalModel {
    const index = this.getLaposteHexasmalIndexByCodePostal(
      laposteHexasmal.fields.code_postal
    );
    if (index > -1) {
      this.databaseConnection.push(
        `/laposteHexasmals[${index}]`,
        laposteHexasmal,
        true
      );
      return laposteHexasmal;
    }
  }
}
