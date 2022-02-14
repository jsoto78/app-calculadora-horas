import { db } from "../firebase/config-firebase";

export const loadData = async (uid) => {
  const res = await db.collection(`${uid}/nominas/nomina`).get();
  const data = [];
  res.forEach((elem) => {
    const nominaData = elem.data();
    data.push({
      id: elem.id,
      ...nominaData,
    });
  });
  return data;
};
