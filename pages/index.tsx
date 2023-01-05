import { atoms } from "../theme/sprinkles.css";

export default function Home() {
  return (
    <main>
      <div
        className={atoms({
          minHeight: "screen",
          backgroundColor: "gray-500",
          paddingY: { default: 6, sm: 12 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingX: 6,
          paddingLeft: { sm: 12 },
        })}
      >
        <div
          className={atoms({
            position: "relative",
            paddingY: 3,
            maxWidth: { sm: "xl" },
            marginX: { sm: "auto" },
          })}
        ></div>
      </div>
    </main>
  );
}
