import { OurTeams } from "./data";

export async function generateStaticParams() {
  return OurTeams.map((team) => ({
    slug: team.slug.toString(),
  }));
}
