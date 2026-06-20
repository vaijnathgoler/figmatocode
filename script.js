lucide.createIcons();

document.addEventListener("DOMContentLoaded", () => {
    const tickerContainer = document.getElementById('stock-ticker');

    const baseStocks = [
        { name: 'GOLD USD', percent: '+1.64%', trend: 'up' },
        { name: 'SILVER USD', percent: '-0.77%', trend: 'down' },
        { name: 'IRON ORE USD', percent: '+1.64%', trend: 'up' },
        { name: 'COPPER USD', percent: '-0.77%', trend: 'down' },
        { name: 'LITHIUM USD', percent: '+1.54%', trend: 'up' },
        { name: 'URANIUM USD', percent: '-2.10%', trend: 'down' },
        { name: 'NICKEL USD', percent: '+1.12%', trend: 'up' },
        { name: 'ZINC USD', percent: '-0.45%', trend: 'down' },
    ];

    const scrollingStocks = [...baseStocks, ...baseStocks];

    let tickerHTML = '';

    scrollingStocks.forEach((stock, index) => {
        const isUp = stock.trend === 'up';
        const colorClass = isUp ? 'text-stockup' : 'text-stockdown';
        const bgClass = isUp ? 'bg-[#16221E]' : 'bg-[#29181A]';

        const sparklineSVG = isUp 
            ? `<svg width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="${colorClass} shrink-0"><path d="M2 11C9 11 13 6 20 6C27 6 31 8 35 5C38 3 39 2 39 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
            : `<svg width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="${colorClass} shrink-0"><path d="M2 3C9 3 13 8 20 8C27 8 31 6 35 9C38 11 39 12 39 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

        const arrowSVG = isUp
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="${colorClass}"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="${colorClass}"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>`;

        let itemHTML = `
            <div class="flex items-center gap-5 py-2 px-4 group cursor-pointer hover:bg-white/5 rounded transition-colors">
                <span class="text-white text-[14px] sm:text-[16px] font-normal leading-[24px] uppercase font-ticker tracking-wide">${stock.name}</span>
                <div class="flex items-center gap-3">
                    ${sparklineSVG}
                    <div class="${bgClass} rounded-[4px] px-1.5 py-0.5 flex justify-center items-center gap-1.5">
                        ${arrowSVG}
                        <span class="${colorClass} font-sans text-[14px] sm:text-[16px] font-medium leading-[21px] sm:leading-[24px] tracking-tight">${stock.percent}</span>
                    </div>
                </div>
            </div>
        `;

        if (index !== scrollingStocks.length - 1) {
            itemHTML += `<div class="w-[18px] h-0 border-t border-[#323234] rotate-90 mx-2 shrink-0"></div>`;
        }

        tickerHTML += itemHTML;
    });

    tickerContainer.innerHTML = `
        <div class="flex items-center shrink-0 pr-8">${tickerHTML}</div>
        <div class="flex items-center shrink-0 pr-8">${tickerHTML}</div>
    `;

    lucide.createIcons();
});
