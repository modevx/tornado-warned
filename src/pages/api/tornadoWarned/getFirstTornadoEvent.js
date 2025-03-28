// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { knexDB } from "@/db/knexDB";

export default async function handler(req, res) {
  try {
    const result = await knexDB("tornado_events").select("*").limit(1);
    res.status(200).json(result);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
