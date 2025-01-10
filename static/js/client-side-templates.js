htmx.defineExtension('client-side-templates', {
    transformResponse : function(text, xhr, elt) {
        const nunjucksTemplate = htmx.closest(elt, "[nunjucks-template]");
        if (nunjucksTemplate) {
            const data = JSON.parse(text);
            const templateName = nunjucksTemplate.getAttribute('nunjucks-template');
            const template = htmx.find('#' + templateName);
            if (template) {
                return nunjucks.renderString(template.innerHTML, data);
            }
            return nunjucks.render(templateName, data);
        }
        return text;
    }
});
