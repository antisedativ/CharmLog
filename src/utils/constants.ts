export const hexRegex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

export const color = {
    orange: '\x1b[38;2;255;127;0m',
    red: '\x1b[38;2;255;0;0m',
    yellow: '\x1b[38;2;255;255;0m',
    green: '\x1b[38;2;0;255;0m',
    blue: '\x1b[38;2;0;0;255m',
    magenta: '\x1b[38;2;187;38;73m',
    cyan: '\x1b[38;2;0;255;255m',
    white: '\x1b[38;2;255;255;255m',
    black: '\x1b[38;2;0;0;0m',
    ligth_red: '\x1b[38;2;255;40;65m'
} as const;

export const logLevelColors = {
    debug: color.white,
    info: color.blue,
    warning: color.orange,
    error: color.ligth_red,
    critical: color.red
} as const;

export const TEXT_DECORATIONS = {
    NONE: 'none',
    UNDERLINE: 'underline',
    LINE_THROUGH: 'line-through',
} as const;

export const FONT_WEIGHTS = {
    NORMAL: 'normal',
    BOLD: 'bold',
} as const;

export const STYLES = {
    NORMAL: 'normal',
    ITALIC: 'italic',
} as const; 