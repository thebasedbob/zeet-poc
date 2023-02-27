import createScholarshipClient from './utils/createScholarshipClient'
import { clientConfiguration } from './utils/placeholderData'

const main = async () => {
  await createScholarshipClient("Bob DAO", "bobdao", clientConfiguration)
}

main()