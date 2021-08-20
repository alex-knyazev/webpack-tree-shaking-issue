/**
 * Second example with one module including in chunk
 */

async function main() {
    const module2 = await import( /* webpackChunkName: 'module-2' */ './module-2.js' );
    alert(module2());
}

main()