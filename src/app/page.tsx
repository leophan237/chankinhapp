import { client } from '@/lib/sanity'
import HomeClient from '@/components/HomeClient'

// Fallback data
const defaultData = {
  heroTitle: 'CHÂN KINH ONLINE',
  heroSubtitle: 'Digital Monastery for Entrepreneurs',
  introduction: 'Nơi ranh giới giữa thế giới vật chất và tinh thần mờ nhạt. Một không gian số cho những người doanh nhân tìm kiếm sự bình an trong tâm hồn.',
  buttonText: 'Bước vào',
  bottomQuote: 'MỌI CON ĐƯỜNG ĐỀU DẪN VÀO BÊN TRONG',
}

async function getHomepageData() {
  try {
    const data = await client.fetch(`*[_type == "homepage"][0]`, {}, {
      next: { revalidate: 60 } // Revalidate every 60s
    })
    return data || defaultData
  } catch (error) {
    console.error("Sanity fetch failed:", error)
    return defaultData
  }
}

export default async function Home() {
  const data = await getHomepageData()

  return <HomeClient data={data} />
}
