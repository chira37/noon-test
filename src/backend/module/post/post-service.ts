import clientPromise from "@/utils/monogodb";
import { ObjectId } from "mongodb";

export const get = async (type: string) => {
  const client = await clientPromise;

  const response = await client
    .db()
    .collection("posts")
    .find(type === "favorite" ? { favorite: true } : {})
    .toArray();
  return response.map((item) => ({ ...item, id: item._id }));
};

export const update = async (id: string, favorite: boolean) => {
  const client = await clientPromise;

  const response = await client
    .db()
    .collection("posts")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { favorite: favorite } });
  return response;
};
