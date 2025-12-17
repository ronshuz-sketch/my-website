// Auto-generate a map of svg filenames -> url using Vite's glob
// Exports default object where keys are filenames without extension
const modules = import.meta.glob('./*.svg', { eager: true });

const logos = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const name = path.replace('./', '').replace('.svg', '');
    return [name, mod.default];
  })
);

export default logos;
