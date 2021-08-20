/**
 * Example with both modules including in  one chunk
 */

async function main() {
    const module1 = await import( /* webpackChunkName: 'module-1' */ './module-1.js' );
    const module2 = await import( /* webpackChunkName: 'module-2' */ './module-2.js' );

    alert(module1());
    alert(module2());
}

main()