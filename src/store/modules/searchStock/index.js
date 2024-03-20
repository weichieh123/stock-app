import { defineStore } from 'pinia'
import { searchStockCode } from '@/api/search'
import * as cheerio from 'cheerio'

export const useSearchStock = defineStore('searchStockStore', {
  state: () => ({
    code: '',
    quote: null, // 當前價格
  }),
  actions: {
    async searchStock(stockCode, country) {
      console.log(stockCode, country)
      const res = await searchStockCode(stockCode, country)
      const $ = cheerio.load(res)

      this.quote = $(`[data-symbol="${stockCode}.${country}"]`)[0].attribs.value

      const canvasElement = $('canvas')[0].attribs.style
      const regex = /width:(\d+)px;height:(\d+)px/
      const match = regex.exec(canvasElement)
      if (match) {
        const width = match[1]
        const height = match[2]
        console.log(canvasElement, width, height)
        // const canvas = createCanvas(width, height)
        // const ctx = canvas.getContext('2d')
        // loadImage(canvasElement.toDataURL()).then(image => {
        //   // 将 Canvas 图像绘制到虚拟 Canvas 上下文中
        //   ctx.drawImage(image, 0, 0, width, height);
        
        //   // 在这里可以进一步处理图像数据，提取所需的信息
        //   // 例如，可以使用 ctx.getImageData() 提取像素数据进行分析
        
        //   // 示例：获取 Canvas 图像数据
        //   const imageData = ctx.getImageData(0, 0, width, height);
        //   console.log(imageData);
        // }).catch(err => {
        //   console.error('Error loading image:', err);
        // })
      }

    },
  },
})