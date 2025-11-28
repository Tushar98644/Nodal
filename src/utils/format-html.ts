export const formatHtml = (html: string) => {
    if (!html) return '';
    let formatted = '';
    let indent = '';

    html.split(/>\s*</).forEach(function (node) {
        if (node.match(/^\/\w/)) indent = indent.substring(2);
        formatted += indent + '<' + node + '>\r\n';
        if (node.match(/^<?\w[^>]*[^\/]$/)) indent += '  ';
    });

    return formatted.substring(1, formatted.length - 3);
};