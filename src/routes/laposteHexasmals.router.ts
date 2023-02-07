import { Router } from "express";
import { LaposteHexasmalsService } from "../services/laposteHexasmals";

const laposteHexasmalsRouter = Router();

const laposteHexasmalsService = new LaposteHexasmalsService();

laposteHexasmalsRouter.get("/", (req, res) => {
  const laposteHexasmals = laposteHexasmalsService.getAllLaposteHexasmals();
  res.status(200).send(laposteHexasmals);
});

laposteHexasmalsRouter.get("/:laposteHexasmalCodePostal", (req, res) => {
  try {
    const laposteHexasmal =
      laposteHexasmalsService.getLaposteHexasmalByCodePostal(
        req.params.laposteHexasmalCodePostal
      );
    res.status(200).send(laposteHexasmal);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

laposteHexasmalsRouter.put("/:laposteHexasmalID", (req, res) => {
  try {
    const laposteHexasmal = laposteHexasmalsService.updateLaposteHexasmal(
      req.params.laposteHexasmalID,
      req.body
    );
    res.status(200).send(laposteHexasmal);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

laposteHexasmalsRouter.delete("/:laposteHexasmalID", (req: any, res) => {
  try {
    laposteHexasmalsService.deleteLaposteHexasmal(
      req.params.laposteHexasmalID,
      req.laposteHexasmal.id
    );
  } catch (error) {
    if (error) {
      res.status(404);
    } else {
      res.status(400);
    }
    res.send(error.message);
  }
});

export default laposteHexasmalsRouter;
