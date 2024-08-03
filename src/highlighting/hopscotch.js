/*
 * Hopscotch
 * by Jan T. Sott
 * https://github.com/idleberg/Hopscotch
 *
 * This work is licensed under the Creative Commons CC0 1.0 Universal License
 */

/** @type {import('shiki').ThemeInput} */
export const theme = {
  name: "Hopscotch",
  type: "dark",
  colors: {
    "activityBar.activeBackground": "#645287",
    "activityBar.activeBorder": "#645287",
    "activityBar.background": "#392f4b",
    "activityBar.foreground": "#fffde6",
    "activityBar.inactiveForeground": "#b9b5b8",
    "activityBarBadge.background": "#fc332b",
    "activityBarBadge.foreground": "#fdcb23",
    "badge.background": "#19988b",
    "button.background": "#829bd6",
    "button.foreground": "#fffde6",
    "button.hoverBackground": "#f490c1",
    "editor.background": "#322931",
    "editor.foreground": "#b9b5b8",
    "editor.lineHighlightBackground": "#0e4842",
    "editor.selectionBackground": "#5d283c",
    "editor.selectionHighlightBackground": "#4a3f5e",
    "editorGroupHeader.tabsBackground": "#171015",
    "editorLineNumber.foreground": "#b9b5b8",
    "editorWidget.background": "#171015",
    "extensionButton.prominentBackground": "#0b998c",
    "extensionButton.prominentHoverBackground": "#59c9be",
    focusBorder: "#fdcb23",
    "list.activeSelectionBackground": "#dd464c",
    "list.hoverBackground": "#af393d",
    "list.hoverForeground": "#fffde6",
    "list.inactiveSelectionBackground": "#962a3e",
    "minimap.background": "#322931",
    "minimap.selectionHighlight": "#5d283c",
    "notificationCenter.border": "#171015",
    "notificationCenterHeader.background": "#4a1c2e",
    "notificationCenterHeader.foreground": "#fffde6",
    "notificationLink.foreground": "#fdcb23",
    "notifications.background": "#392f4b",
    "notifications.foreground": "#fffde6",
    "notificationsErrorIcon.foreground": "#f2480f",
    "notificationsInfoIcon.foreground": "#1290bf",
    "notificationsWarningIcon.foreground": "#fd8b19",
    "sideBar.background": "#171015",
    "sideBar.debuggingBackground": "#e2430e",
    "sideBar.foreground": "#b9b5b8",
    "sideBarSectionHeader.background": "#645287",
    "sideBarSectionHeader.foreground": "#fffde6",
    "statusBar.background": "#1290bf",
    "statusBar.debuggingBackground": "#fd8b19",
    "statusBar.foreground": "#fff",
    "statusBar.noFolderBackground": "#7d3765",
    "tab.activeBackground": "#645287",
    "tab.inactiveBackground": "#392f4b",
    "terminal.ansiBlue": "#1290bf",
    "terminal.ansiBrightBlue": "#829bd6",
    "terminal.ansiBrightCyan": "#1ac9bf",
    "terminal.ansiBrightGreen": "#5fdba7",
    "terminal.ansiBrightMagenta": "#fc608a",
    "terminal.ansiBrightRed": "#fd948c",
    "terminal.ansiBrightWhite": "#fffde6",
    "terminal.ansiBrigthYellow": "#fdcb23",
    "terminal.ansiCyan": "#19988b",
    "terminal.ansiGreen": "#8fc13e",
    "terminal.ansiMagenta": "#e12a5b",
    "terminal.ansiRed": "#fc332b",
    "terminal.ansiWhite": "#fc332b",
    "terminal.ansiYellow": "#fdaf1f",
    "terminal.foreground": "#b9b5b8",
    "terminal.selectionBackground": "#5d283c",
    "textLink.activeForeground": "#f490c1",
    "textLink.foreground": "#829bd6",
    "titleBar.activeBackground": "#171015",
    "window.activeBorder": "#171015",
    "window.inactiveBorder": "#171015",
  },
  tokenColors: [
    {
      settings: {
        background: "#322931",
        foreground: "#b9b5b8",
      },
    },
    {
      name: "Text",
      scope: "variable.parameter.function",
      settings: {
        foreground: "#b9b5b8",
      },
    },
    {
      name: "Comments",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#797379",
      },
    },
    {
      name: "Punctuation",
      scope: [
        "punctuation.definition.string",
        "punctuation.definition.variable",
        "punctuation.definition.string",
        "punctuation.definition.parameters",
        "punctuation.definition.string",
        "punctuation.definition.array",
      ],
      settings: {
        foreground: "#b9b5b8",
      },
    },
    {
      name: "Delimiters",
      scope: "none",
      settings: {
        foreground: "#b9b5b8",
      },
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        foreground: "#b9b5b8",
      },
    },
    {
      name: "Keywords",
      scope: ["keyword", "keyword.control"],
      settings: {
        foreground: "#c85e7c",
      },
    },
    {
      name: "Variables",
      scope: "variable",
      settings: {
        foreground: "#dd464c",
      },
    },
    {
      name: "Functions",
      scope: ["entity.name.function", "meta.require", "support.function.any-method"],
      settings: {
        foreground: "#1290bf",
      },
    },
    {
      name: "Classes",
      scope: ["support.class", "entity.name.class", "entity.name.type"],
      settings: {
        foreground: "#fdcc59",
      },
    },
    {
      name: "Methods",
      scope: "keyword.other.special-method",
      settings: {
        foreground: "#1290bf",
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: "#c85e7c",
      },
    },
    {
      name: "Support",
      scope: "support.function",
      settings: {
        foreground: "#7e602c",
      },
    },
    {
      name: "Strings, Inherited Class",
      scope: ["string", "constant.other.symbol", "entity.other.inherited-class"],
      settings: {
        foreground: "#8fc13e",
      },
    },
    {
      name: "Integers",
      scope: "constant.numeric",
      settings: {
        foreground: "#fd8b19",
      },
    },
    {
      name: "Floats",
      scope: "none",
      settings: {
        foreground: "#fd8b19",
      },
    },
    {
      name: "Boolean",
      scope: "none",
      settings: {
        foreground: "#fd8b19",
      },
    },
    {
      name: "Constants",
      scope: "constant",
      settings: {
        foreground: "#fd8b19",
      },
    },
    {
      name: "Tags",
      scope: "entity.name.tag",
      settings: {
        foreground: "#dd464c",
      },
    },
    {
      name: "Attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#fd8b19",
      },
    },
    {
      name: "Attribute IDs",
      scope: ["entity.other.attribute-name.id", "punctuation.definition.entity"],
      settings: {
        foreground: "#1290bf",
      },
    },
    {
      name: "Selector",
      scope: "meta.selector",
      settings: {
        foreground: "#c85e7c",
      },
    },
    {
      name: "Values",
      scope: "none",
      settings: {
        foreground: "#fd8b19",
      },
    },
    {
      name: "Headings",
      scope: ["markup.heading", "markup.heading.setext", "punctuation.definition.heading", "entity.name.section"],
      settings: {
        fontStyle: "",
        foreground: "#1290bf",
      },
    },
    {
      name: "Units",
      scope: "keyword.other.unit",
      settings: {
        foreground: "#fd8b19",
      },
    },
    {
      name: "Bold",
      scope: ["markup.bold", "punctuation.definition.bold"],
      settings: {
        fontStyle: "bold",
        foreground: "#fdcc59",
      },
    },
    {
      name: "Italic",
      scope: ["markup.italic", "punctuation.definition.italic"],
      settings: {
        fontStyle: "italic",
        foreground: "#c85e7c",
      },
    },
    {
      name: "Code",
      scope: "markup.inline.raw",
      settings: {
        foreground: "#8fc13e",
      },
    },
    {
      name: "Link Text",
      scope: "string.other.link",
      settings: {
        foreground: "#dd464c",
      },
    },
    {
      name: "Link Url",
      scope: "meta.link",
      settings: {
        foreground: "#fd8b19",
      },
    },
    {
      name: "Lists",
      scope: "markup.list",
      settings: {
        foreground: "#dd464c",
      },
    },
    {
      name: "Quotes",
      scope: "markup.quote",
      settings: {
        foreground: "#fd8b19",
      },
    },
    {
      name: "Separator",
      scope: "meta.separator",
      settings: {
        background: "#5c545b",
        foreground: "#b9b5b8",
      },
    },
    {
      name: "Inserted",
      scope: "markup.inserted",
      settings: {
        foreground: "#8fc13e",
      },
    },
    {
      name: "Deleted",
      scope: "markup.deleted",
      settings: {
        foreground: "#dd464c",
      },
    },
    {
      name: "Changed",
      scope: "markup.changed",
      settings: {
        foreground: "#c85e7c",
      },
    },
    {
      name: "Colors",
      scope: "constant.other.color",
      settings: {
        foreground: "#7e602c",
      },
    },
    {
      name: "Regular Expressions",
      scope: "string.regexp",
      settings: {
        foreground: "#7e602c",
      },
    },
    {
      name: "Escape Characters",
      scope: "constant.character.escape",
      settings: {
        foreground: "#7e602c",
      },
    },
    {
      name: "Embedded",
      scope: ["punctuation.section.embedded", "variable.interpolation"],
      settings: {
        foreground: "#149b93",
      },
    },
    {
      name: "Invalid",
      scope: "invalid.illegal",
      settings: {
        foreground: "#dd464c",
      },
    },
  ],
};
