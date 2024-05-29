export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <p>{slug}</p>;
}
