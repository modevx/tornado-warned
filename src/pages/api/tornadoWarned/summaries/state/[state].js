import { knexDB } from "@/db/knexDB";

export default async function handler(req, res) {
  const { state } = req.query;
  try {
    const result = await knexDB("mv_state_impact_summary")
      .select("*")
      .where("event_state", state);
    res.status(200).json(result);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
