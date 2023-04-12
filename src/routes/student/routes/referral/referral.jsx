import React, {useEffect, useRef, useState} from "react";
import './referral.scss'

const Referral = () => {
  const defaultReferrers = [
    {
      name: 'Allo ccbd',
      company: 'Goal',
      keywords: 'lol,code,se'
    },
    {
      name: 'Nope ccbd',
      company: 'Goal',
      keywords: 'itoto,code,se'
    },
    {
      name: 'Koop ccbd',
      company: 'Goal',
      keywords: 'coloco,code,se'
    },
    {
      name: 'Jeep ccbd',
      company: 'Gaya',
      keywords: 'lololo,code,se'
    },
  ]

  const defaultPastRequests = [
    {
      date: '04/11/2023',
      referrer: 'Loop me',
      company: 'Google',
      status: 'pending',
    },
    {
      date: '04/01/2023',
      referrer: 'Cool deed',
      company: 'Columbia ccbd',
      status: 'done',
    },
    {
      date: '04/11/2023',
      referrer: 'Mr. X',
      company: 'CCBD',
      status: 'rejected',
    },
  ]
  const [referrers, setReferrers] = useState(defaultReferrers)
  const [pastRequests, setPastRequests] = useState(defaultPastRequests)

  const companyRef = useRef()
  const keywordRef = useRef()

  useEffect(() => {
    // TODO: API call to fetch pastRequests
    console.log("useEffect TODO: API call to fetch pastRequests")
  }, [])

  const askReferral = (referrer) => {
    // TODO: API call to ask referral
    console.log("TODO: API call to ask referral", referrer)
  }

  const searchReferrers = () => {
    const company = companyRef.current.value
    const keyword = keywordRef.current.value
    // TODO: API call to fetch Referrers
    console.log("TODO: API call to ask referral", company, keyword)
  }

  const getStatusLabel = (rstatus) => {
    console.log("here")
    switch (rstatus) {
      case 'pending': return <div className={'status'} style={{color: '#fba505'}}>PENDING</div>
      case 'done': return <div className={'status'} style={{color: '#0a8800'}}>DONE</div>
      case 'rejected': return <div className={'status'} style={{color: '#fd4040'}}>REJECTED</div>
      default: return <div className={'status'} style={{color: '#000000'}}>INVALID</div>
    }
  }

  return (
    <div className={'referral'}>
      <div className={'request'}>
        <div style={{fontSize: '20px', lineHeight: '24px', color: '#0033A0'}}>Request Referral</div>
        <div style={{fontSize: '16px', lineHeight: '19px', color: '#000000', marginTop: '30px'}}>
          Add filtering details:
        </div>
        <div className={'filters'}>
          <div className={'filter'}>
            <div style={{fontSize: '15px'}}>Company</div>
            <input type={'text'} ref={companyRef} placeholder={'Enter a company like \'Google\''}/>
          </div>
          <div className={'filter'}>
            <div style={{fontSize: '15px'}}>Keywords</div>
            <input type={'text'} ref={keywordRef} placeholder={'Enter keywords like \'Software,ml,data\''}/>
          </div>
          <button onClick={searchReferrers}>Search</button>
        </div>
        {
          referrers.length > 0 ?
            <table>
              <thead>
              <tr>
                <th>Referrer</th>
                <th>Company</th>
                <th>Keywords</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {referrers.map((referrer, index) => {
                return <tr key={index}>
                  <td>{referrer.name}</td>
                  <td>{referrer.company}</td>
                  <td>{referrer.keywords}</td>
                  <td>
                    <button onClick={() => askReferral(referrer)} style={{width: '90%'}}>Ask referral</button>
                  </td>
                </tr>
              })}

              </tbody>
            </table>
            :
            ''
        }

      </div>
      <div className={'past'}>
        <div style={{fontSize: '24px', lineHeight: '29px', color: '#0033A0'}}>Past requests</div>
        <table>
          <thead>
          <tr>
            <th>Date</th>
            <th>Referrer</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          {pastRequests.map((request, index) => {
            return <tr key={index}>
              <td>{request.date}</td>
              <td>{request.referrer}</td>
              <td>{request.company}</td>
              <td>
                {getStatusLabel(request.status)}
              </td>
            </tr>
          })}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Referral