//main config file

var config = {};

config.TRANSPARENCY = false;
config.TRANSPARENCY_TYPE = "squares"; //squares, green, grey
config.LANG = "en";
config.WIDTH = null;
config.HEIGHT = null;
config.visible_width = null;
config.visible_height = null;
config.COLOR = "#ec1c24";
config.ALPHA = 255;
config.ZOOM = 1;
config.SNAP = true;
config.pixabay_key = "3ca2cd8af3fde33af218bea02-9021417";
config.safe_search_can_be_disabled = true;
config.google_webfonts_key = "AIzaSyAC_Tx8RKkvN235fXCUyi_5XhSaRCzNhMg";
config.layers = [];
config.layer = null;
config.need_render = false;
config.need_render_changed_params = false; // Set specifically when param change in layer details triggered render
config.mouse = {};
config.mouse_lock = null;
config.swatches = {
  default: [
    "#ec1c24",
    "#ff7f27",
    "#ffca18",
    "#fff200",
    "#c4ff0e",
    "#0ed145",
    "#00a8f3",
    "#3f48cc",
    "#8400e2",
    "#ff01ff",
    "#ff0181",
    "#ffaec8",
    "#8cfffb",
    "#91ffb0",
    "#ffffff",
    "#aaaaaa",
    "#585858",
    "#b97a56",
    "#cf5d00",
    "#772b00",
    "#000000",
  ], // Only default used right now, object format for swatch swapping in future.
};
config.user_fonts = {};
config.guides_enabled = true;
config.guides = [];
config.ruler_active = false;

//requires styles in reset.css
config.themes = ["blue", "light", "green", "dark"];

//no-translate BEGIN
config.FONTS = [
  "Arial",
  "Courier",
  "Impact",
  "Helvetica",
  "Monospace",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Amatic SC",
  "Arimo",
  "Codystar",
  "Creepster",
  "Indie Flower",
  "Lato",
  "Lora",
  "Merriweather",
  "Monoton",
  "Montserrat",
  "Mukta",
  "Muli",
  "Nosifer",
  "Nunito",
  "Oswald",
  "Orbitron",
  "Pacifico",
  "PT Sans",
  "PT Serif",
  "Playfair Display",
  "Poppins",
  "Raleway",
  "Roboto",
  "Rubik",
  "Special Elite",
  "Tangerine",
  "Titillium Web",
  "Ubuntu",
];
//no-translate END

config.TOOLS = [
  {
    name: "select",
    title: "Select object tool",
    attributes: {
      // auto_select: true,
      auto_select: {
        value: true,
        icon: `auto_select.svg`,
      },
    },
  },
  // {
  // 	name: 'selection',
  // 	attributes: {},
  // 	on_leave: 'on_leave',
  // },
  {
    name: "brush",
    attributes: {
      size: 10,
      quick: {
        small: 10,
        medium: 20,
        large: 30,
      },
      pressure: true,
    },
  },
  {
    name: "pencil",
    attributes: {
      size: 1,
      quick: {
        small: 1,
        medium: 2,
        large: 3,
      },
      pressure: true,
    },
  },
  // {
  // 	name: 'pick_color',
  // 	attributes: {
  // 		global: false,
  // 	},
  // },
  //   {
  //     name: "erase",
  //     on_update: "on_params_update",
  //     attributes: {
  //       size: 80,
  //       circle: true,
  //       strict: true,
  //     },
  //   },
  // {
  // 	name: 'magic_erase',
  // 	title: 'Magic Eraser Tool',
  // 	attributes: {
  // 		power: 15,
  // 		anti_aliasing: true,
  // 		contiguous: false,
  // 	},
  // },
  // {
  // 	name: 'fill',
  // 	attributes: {
  // 		power: 5,
  // 		anti_aliasing: false,
  // 		contiguous: false,
  // 	},
  // },
  {
    name: "shape",
    on_activate: "on_activate",
    title: "Shapes (H)",
    attributes: {
      size: 3,
      stroke: "#00aa00",
    },
  },
  {
    name: "line",
    // visible: false,
    attributes: {
      size: 4,
      quick: {
        small: 2,
        medium: 5,
        large: 8,
      },
    },
  },
  {
    name: "arrow",
    // visible: false,
    attributes: {
      size: 4,
      quick: {
        small: 2,
        medium: 5,
        large: 8,
      },
    },
  },
  {
    name: "rectangle",
    // visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
      radius: {
        value: 0,
        min: 0,
      },
      square: false,
      quick: {
        small: 2,
        medium: 5,
        large: 8,
      },
    },
  },
  {
    name: "ellipse",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
      circle: false,
    },
  },
  // {
  // 	name: 'media',
  // 	title: 'Search Images',
  // 	on_activate: 'on_activate',
  // 	attributes: {
  // 		size: 30,
  // 	},
  // },
  {
    name: "triangle",
    // visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
      quick: {
        small: 2,
        medium: 5,
        large: 8,
      },
    },
  },
  {
    name: "right_triangle",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "romb",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "parallelogram",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "trapezoid",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "plus",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "pentagon",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "hexagon",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "star",
    visible: false,
    attributes: {
      border_size: 4,
      corners: 5,
      inner_radius: 40,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "heart",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "cylinder",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "human",
    visible: false,
    attributes: {
      border_size: 4,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "tear",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "cog",
    visible: false,
    attributes: {
      fill_color: "#555555",
    },
  },
  {
    name: "bezier_curve",
    // visible: false,
    attributes: {
      size: 4,
      quick: {
        small: 2,
        medium: 5,
        large: 8,
      },
    },
  },
  {
    name: "moon",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "callout",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
  {
    name: "text",
    on_activate: "on_activate",
    on_update: "on_params_update",
    attributes: {
      font: {
        value: "Arial",
        values() {
          const user_font_names = Object.keys(config.user_fonts);
          return [
            "",
            "[Add Font...]",
            ...Array.from(
              new Set([...config.FONTS, ...user_font_names].sort())
            ),
          ];
        },
      },
      size: 40,
      bold: {
        value: false,
        icon: `bold.svg`,
      },
      italic: {
        value: false,
        icon: `italic.svg`,
      },
      underline: {
        value: false,
        icon: `underline.svg`,
      },
      strikethrough: {
        value: false,
        icon: `strikethrough.svg`,
      },
      fill: "#ec1c24",
      stroke: "#000000",
      stroke_size: {
        value: 0,
        min: 0,
        step: 0.1,
      },
      kerning: {
        value: 0,
        min: -999,
        max: 999,
        step: 1,
      },
      leading: {
        value: 0,
        min: -999,
        max: 999,
        step: 1,
      },
      default: {
        content: [
          {
            title: "哈囉",
            class:[]
          },
          {
            title: "你好",
            class:[]
          },
        ],
      },
    },
  },
  // {
  // 	name: 'gradient',
  // 	attributes: {
  // 		color_1: '#008000',
  // 		color_2: '#ffffff',
  // 		alpha: 0,
  // 		radial: false,
  // 		radial_power: 50,
  // 	},
  // },
  // {
  // 	name: 'clone',
  // 	attributes: {
  // 		size: 30,
  // 		anti_aliasing: true,
  // 		source_layer: {
  // 			value: 'Current',
  // 			values: ['Current', 'Previous'],
  // 		},
  // 	},
  // },
  // {
  // 	name: 'crop',
  // 	on_update: 'on_params_update',
  // 	on_leave: 'on_leave',
  // 	attributes: {
  // 		crop: true,
  // 	},
  // },
  // {
  // 	name: 'blur',
  // 	attributes: {
  // 		size: 30,
  // 		strength: 1,
  // 	},
  // },
  // {
  // 	name: 'sharpen',
  // 	attributes: {
  // 		size: 30,
  // 	},
  // },
  // {
  // 	name: 'desaturate',
  // 	attributes: {
  // 		size: 50,
  // 		anti_aliasing: true,
  // 	},
  // },
  // {
  // 	name: 'bulge_pinch',
  // 	title: 'Bulge/Pinch Tool',
  // 	attributes: {
  // 		radius: 80,
  // 		power: 50,
  // 		bulge: true,
  // 	},
  // },
  // {
  // 	name: 'animation',
  // 	on_activate: 'on_activate',
  // 	on_update: 'on_params_update',
  // 	on_leave: 'on_leave',
  // 	attributes: {
  // 		play: false,
  // 		delay: 400,
  // 	},
  // },
  {
    name: "polygon",
    visible: false,
    attributes: {
      border_size: 4,
      border: true,
      fill: false,
      border_color: "#ec1c24",
      fill_color: "#aaaaaa",
    },
  },
];

//link to active tool
config.TOOL = config.TOOLS[2];

export default config;
