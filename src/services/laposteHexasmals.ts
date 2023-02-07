import { LaposteHexasmalDao } from "../dao/laposteHexasmals.dao";
import { LaposteHexasmalModel } from "../models/laposteHexasmals.model";

export class LaposteHexasmalsService {
  private laposteHexasmalDAO: LaposteHexasmalDao = new LaposteHexasmalDao();

  public getAllLaposteHexasmals(): LaposteHexasmalModel[] {
    return this.laposteHexasmalDAO.list();
  }

  public getLaposteHexasmalByCodePostal(laposteHexasmalCodePostal: string) {
    const laposteHexasmal =
      this.laposteHexasmalDAO.getLaposteHexasmalIndexByCodePostal(
        laposteHexasmalCodePostal
      );
    if (!laposteHexasmal) {
      throw new Error("unknown laposteHexasmal");
    }
    return laposteHexasmal;
  }
  public deleteLaposteHexasmal(
    laposteHexasmalID: string,
    currentLaposteHexasmalID: string
  ) {
    if (laposteHexasmalID === currentLaposteHexasmalID) {
      throw new Error("laposteHexasmal cannot remove himself !");
    }
    const laposteHexasmal = this.laposteHexasmalDAO.getByID(laposteHexasmalID);
    if (!laposteHexasmal) {
      throw new Error("unknown laposteHexasmal");
    }
    return this.laposteHexasmalDAO.delete(laposteHexasmalID);
  }

  public updateLaposteHexasmal(
    laposteHexasmalId: string,
    laposteHexasmal: LaposteHexasmalModel
  ): LaposteHexasmalModel {
    const existingLaposteHexasmal =
      this.laposteHexasmalDAO.getByID(laposteHexasmalId);
    if (!existingLaposteHexasmal) {
      throw new Error("unknown laposteHexasmal");
    }
    const laposteHexasmalToUpdate = {
      ...existingLaposteHexasmal,
      ...laposteHexasmal,
    };

    return this.laposteHexasmalDAO.update(laposteHexasmalToUpdate);
  }
}
