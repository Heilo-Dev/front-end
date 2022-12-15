import React from 'react'
import { Notification } from '../../../components'
import CompletedSessions from '../../../components/admin/student/completed-sessions'
import StateInfo from '../../../components/admin/student/state-info'
import StudentInfo from '../../../components/admin/student/student-info'
import AccessControl from '../../../components/admin/teacher/acces-control'
import ActionCard from '../../../components/admin/teacher/action-card'
import Notifications from '../../../components/student/dashboard/student-find-tutor/notifications'
import { AdminLayout } from '../../../layouts'

type Props = {}

const index = (props: Props) => {
  return (
    <AdminLayout>
        <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 p-7">
          <StudentInfo/>
          <div>
            <StateInfo/>
          </div>
          <CompletedSessions/>
        </div>
        <div className="col-span-4 bg-[#EBEBEB] rounded-l-2xl h-screen px-2">
          <AccessControl />
        </div>
      </div>
    </AdminLayout>
  )
}

export default index