import httpReq from '@/utils/request'

export const searchStockCode = (stockCode, country) => {
  return httpReq.get(`/api/yahoo?stockCode=${stockCode}&country=${country}`)
}