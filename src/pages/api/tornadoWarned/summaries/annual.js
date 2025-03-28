import { knexDB } from "@/db/knexDB";

export default async function handler(req, res) {
  try {
    const result = await knexDB("mv_annual_impact_summary")
      .select("*")
      .orderBy("event_year", "desc");
    res.status(200).json(result);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
