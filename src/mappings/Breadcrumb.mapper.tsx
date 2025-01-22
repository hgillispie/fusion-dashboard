import { figmaMapping } from "@builder.io/dev-tools/figma";
import { BreadcrumbGroup } from "@/builder-components";

figmaMapping({
  componentKey: "49ecd03e916e48c6eb3fe3573940971640256af0",
  mapper(figma) {
    return (
      <BreadcrumbGroup
        items={
          figma.$children?.map((child) => ({
            text: child?.$textContent ?? "",
            href: "#",
          })) ?? []
        }
        ariaLabel="Breadcrumbs"
      />
    );
  },
});
