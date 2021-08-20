/**
 * Example with one module including in chunk
 */

async function main() {
    const module1 = await import( /* webpackChunkName: 'module-1' */ './module-1.js' );
    alert(module1());
}

main()