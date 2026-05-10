import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { themes } from "../themes";

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  currentTheme: string;
  onThemeChange: (id: string) => void;
}

export default function SettingsModal({ isOpen, onOpenChange, currentTheme, onThemeChange }: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" placement="center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Настройки</ModalHeader>
        <ModalBody className="pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {themes.map((t) => {
              const isDark = t.group === "dark";
              const selected = currentTheme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => onThemeChange(t.id)}
                  className={`relative rounded-xl border-2 p-4 text-left transition-all duration-200 cursor-pointer ${
                    selected
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-default-200 hover:border-default-400"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`size-3 rounded-full ${isDark ? "bg-neutral-900" : "bg-neutral-50"} ring-1 ring-neutral-300`} />
                    <span className="font-semibold text-sm">{t.label}</span>
                    <span className={`ml-auto flex items-center gap-1.5 text-xs ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                      {selected && (
                        <span className="size-4 bg-primary rounded-full flex items-center justify-center">
                          <svg viewBox="0 0 20 20" fill="white" className="size-2.5">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                      {isDark ? "тёмная" : "светлая"}
                    </span>
                  </div>

                  <div className={`rounded-lg p-3 border ${isDark ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"}`}>
                    <div className="flex gap-2 mb-2">
                      <div className={`h-2 w-16 rounded ${isDark ? "bg-neutral-600" : "bg-neutral-300"}`} />
                      <div className={`h-2 w-8 rounded ${isDark ? "bg-neutral-700" : "bg-neutral-200"} ml-auto`} />
                    </div>
                    <div className="flex gap-2 mb-2">
                      <div className={`h-4 w-full rounded ${t.accent}`} />
                    </div>
                    <div className="flex gap-2">
                      <div className={`h-2 w-12 rounded ${isDark ? "bg-neutral-600" : "bg-neutral-300"}`} />
                      <div className={`h-2 w-12 rounded ${isDark ? "bg-neutral-700" : "bg-neutral-200"}`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
