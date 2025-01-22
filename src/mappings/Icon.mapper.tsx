import { figmaMapping } from "@builder.io/dev-tools/figma";
import { Icon } from "@/builder-components";

figmaMapping({
  componentKey: "4410e9b1b673fbbf124c7298372d99edf38eba6f",
  mapper(figma) {
    return (
      <Icon
        name={figma.Name?.toLowerCase() as any}
        size={figma.Size?.toLowerCase() as "big" | "large" | "medium" | "small"}
        variant={figma["Visual context"] === "Dark" ? "inverted" : "normal"}
      />
    );
  },
});
