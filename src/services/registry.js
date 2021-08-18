import { gql } from '@apollo/client'

export const UPDATE_USER_AND_COMMUNITY = gql`
  mutation UPDATE_USER_AND_COMMUNITY(
    $userID: uuid!
    $firstName: String!
    $lastName: String!
    $profileURL: String
    $email: String!
    $extras: json
    $name: String!
    $facebook: String
    $detail: String!
    $need: String!
    $address: String!
    $subDistrict: String!
    $city: String!
    $province: String!
    $zipcode: String!
    $communityEmail: String!
    $tel: String!
    $line: String
    $contactPerson: String!
    $contactPosition: String!
    $communityExtras: jsonb
  ) {
    update_auth_user(
      where: { id: { _eq: $userID } }
      _set: {
        username: $name
        first_name: $firstName
        last_name: $lastName
        profile_url: $profileURL
        email: $email
        extras: $extras
      }
    ) {
      affected_rows
    }
    insert_community_one(
      object: {
        name: $name
        facebook: $facebook
        detail: $detail
        need: $need
        address: $address
        sub_district: $subDistrict
        city: $city
        province: $province
        zipcode: $zipcode
        contact_email: $communityEmail
        contact_tel: $tel
        contact_line: $line
        contact_person: $contactPerson
        contact_position: $contactPosition
        extras: $communityExtras
      }
      on_conflict: { constraint: community_user_id_key, update_columns: [name] }
    ) {
      created_at
      id
    }
  }
`

export const UPDATE_USER_AND_COMPANY = gql`
  mutation UPDATE_USER_AND_COMPANY(
    $userID: uuid!
    $firstName: String!
    $lastName: String!
    $profileURL: String
    $businessType: json!
    $name: String!
    $email: String!
    $companyEmail: String!
    $extras: json
    $address: String!
    $subDistrict: String!
    $city: String!
    $province: String!
    $zipcode: String!
    $tel: String!
    $fax: String
    $detail: String!
    $website: String!
    $contactPerson: String!
    $contactPosition: String!
  ) {
    update_auth_user(
      where: { id: { _eq: $userID } }
      _set: {
        username: $name
        first_name: $firstName
        last_name: $lastName
        profile_url: $profileURL
        email: $email
        extras: $extras
      }
    ) {
      affected_rows
    }
    insert_company_one(
      object: {
        name: $name
        tel: $tel
        business_type: $businessType
        address: $address
        sub_district: $subDistrict
        city: $city
        province: $province
        zipcode: $zipcode
        fax: $fax
        detail: $detail
        email: $companyEmail
        website: $website
        contact_person: $contactPerson
        contact_position: $contactPosition
      }
      on_conflict: { constraint: company_user_id_key, update_columns: [name] }
    ) {
      created_at
      id
    }
  }
`

export const UPDATE_USER_AND_RESUME = gql`
  mutation UPDATE_USER(
    $userID: uuid!
    $email: String!
    $firstName: String!
    $lastName: String!
    $profileURL: String
    $extras: json
    $tel: String
    $address: json
    $position: String
    $educations: json
    $jobs: json
    $salary: numeric
  ) {
    update_auth_user(
      where: { id: { _eq: $userID } }
      _set: { email: $email, first_name: $firstName, last_name: $lastName, profile_url: $profileURL, extras: $extras }
    ) {
      affected_rows
    }

    insert_user_resume_one(
      object: {
        tel: $tel
        address: $address
        position: $position
        educations: $educations
        jobs: $jobs
        salary: $salary
      }
      on_conflict: { constraint: user_resume_user_id_key, update_columns: [address, jobs, position, salary, tel] }
    ) {
      updated_at
    }
  }
`
