import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'tdmgrb4y',
  dataset: 'production',
  apiVersion: '2022-02-03',
  token:
    'skhRrDzXU9gsfeeT3ERMrej8OU6TD5hncHHQ0LMZ0Z15PIjbuxct8JzhNdft7brziiBm86neGsBAkibokikedP4d48F5VcovE3u0Z13rIr9JyB9cMQrOeVqVCnbjt8tn1BDIJoCaBISpWrSIJQtRXfR4HbyngMT8ncsRzE2vBgfHJQWOCqJ8',
  useCdn: false,
})
