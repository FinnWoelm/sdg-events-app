// Return the display name or name of the provided component.
// Return 'Component' if neither is set.
export default function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}
