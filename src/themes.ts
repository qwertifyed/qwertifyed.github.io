export interface Theme {
  id: string;
  label: string;
  group: "light" | "dark";
  accent: string;
}

export const themes: Theme[] = [
  { id: "svetlana", label: "Светлана", group: "light", accent: "bg-indigo-500" },
  { id: "sun-monaco", label: "Солнце Монако", group: "light", accent: "bg-amber-500" },
  { id: "darkula", label: "Даркула", group: "dark", accent: "bg-violet-500" },
  { id: "screaming-chicken", label: "Орущая курица на дереве", group: "dark", accent: "bg-orange-500" },
];

export function applyTheme(themeId: string) {
  const root = document.documentElement;
  const theme = themes.find((t) => t.id === themeId);

  root.classList.remove(...themes.map((t) => `theme-${t.id}`));
  root.classList.remove("dark");
  root.classList.add(`theme-${themeId}`);

  if (theme?.group === "dark") {
    root.classList.add("dark");
  }

  localStorage.setItem("theme", themeId);
}

export function getStoredTheme(): string {
  return localStorage.getItem("theme") || "svetlana";
}
