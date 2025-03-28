import { knexDB } from "@/db/knexDB";

export default async function handler(req, res) {
  const { magnitude } = req.query;
  try {
    const result = await knexDB("mv_magnitude_impact_summary")
      .select("*")
      .where("magnitude", magnitude);
    res.status(200).json(result);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
