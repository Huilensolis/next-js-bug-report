import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Huilen Solis's Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return new ImageResponse(
    (
      <div
        style={{
          background: "rgb(10 10 10 / 1)",
          color: "rgb(250 250 250 / 1)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          padding: "2rem",
        }}
      >
        <h1 style={{ textAlign: "start", fontSize: "5rem" }}>{slug}</h1>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
