import { handleSuccess } from "../Handlers/responseHandlers.js";
import { updateUserService, deleteUserService } from "../services/user.service.js";
import bcrypt from "bcrypt";


export function getPublicProfile(req, res) {
  handleSuccess(res, 200, "Perfil público obtenido exitosamente", {
    message: "¡Hola! Este es un perfil público. Cualquiera puede verlo.",
  });
}

export function getPrivateProfile(req, res) {
  const user = req.user;

  handleSuccess(res, 200, "Perfil privado obtenido exitosamente", {
    message: `¡Hola, ${user.email}! Este es tu perfil privado. Solo tú puedes verlo.`,
    userData: user,
  });
}

export const updatePrivateProfile = async (req, res) => {
  try {
    const userId = req.user.id; // extraído del JWT
    const { email, password } = req.body;

    const updateData = {};
    if (email) updateData.email = email;
    if (password) updateData.password = await bcrypt.hash(password, 10);

    const updatedUser = await updateUserService(userId, updateData);
    if (!updatedUser) return res.status(404).json({ message: "Usuario no encontrado" });

    res.json({ message: "Perfil actualizado correctamente", user: updatedUser });
  } catch (error) {
    console.error("Error al actualizar perfil:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deletePrivateProfile = async (req, res) => {
  try {
    const userId = req.user.id; // extraído del JWT

    const deletedUser = await deleteUserService(userId);
    if (!deletedUser) return res.status(404).json({ message: "Usuario no encontrado" });

    res.json({ message: "Perfil eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar perfil:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};