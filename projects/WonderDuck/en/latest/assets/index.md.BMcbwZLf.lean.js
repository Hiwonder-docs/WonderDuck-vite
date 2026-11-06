import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.DqbOq2XU.js";
const __pageData = JSON.parse('{"title":"WonderDuck","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "wonderduck",
      tabindex: "-1"
    }, [
      createTextVNode("WonderDuck "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#wonderduck",
        "aria-label": 'Permalink to "WonderDuck"'
      }, "​")
    ], -1),
    createBaseVNode("div", { class: "custom-block note" }, [
      createBaseVNode("p", { class: "custom-block-title" }, "NOTE"),
      createBaseVNode("p", null, "Content is being built, please stay tuned")
    ], -1)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
