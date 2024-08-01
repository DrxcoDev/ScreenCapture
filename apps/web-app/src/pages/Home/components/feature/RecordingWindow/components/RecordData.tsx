import { useStopwatch } from '@/hooks'
import { formatTime } from '@/utils/others'
import { useEffect } from 'react'
import { recordingStatusType } from '../models'
import { useRecorderContext } from '../services/context'

export const RecordData = () => {
  const { startStopwatch, stopStopwatch, time, startTime, endTime, pauseStopwatch, resumeStopwatch } = useStopwatch()
  const { recordingStatus } = useRecorderContext()

  useEffect(() => {
    if (recordingStatus === recordingStatusType.on) {
      startStopwatch()
    } else if (recordingStatus === recordingStatusType.off) {
      stopStopwatch()
    } else if (recordingStatus === recordingStatusType.paused) {
      pauseStopwatch()
    } else if (recordingStatus === recordingStatusType.resumed) {
      resumeStopwatch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordingStatus])

  const timeFormatted = formatTime(time)

  return (
        <div>
            <div
                className="flex font-bold"
            >
                <div
                    className="flex flex-col"
                >
                    <span
                        className="text-xs leading-3"
                    >
                        Time
                    </span>
                    <div>
                        <span
                            className="text-3xl leading-7"
                        >
                            {timeFormatted?.hours}
                            :
                            {timeFormatted?.minutes}
                        </span>
                        <span
                            className="text-sm"
                        >
                            :{timeFormatted?.seconds}
                        </span>
                    </div>
                </div>
                <div
                    className='flex flex-col items-end justify-center flex-grow'
                >
                    <div
                        className="flex gap-1 text-xs"
                    >
                        <span
                            className="font-normal"
                        >
                            Started at
                        </span>
                        <span
                            className="text-xs font-normal"
                        >
                            {`${startTime?.hours ?? '- -'}:${startTime?.minutes ?? '- -'}`}
                        </span>
                    </div>
                    <div
                        className="flex gap-1 text-xs"
                    >
                        <span
                            className="font-normal"
                        >
                            Stopped at
                        </span>
                        <span
                            className="text-xs"
                        >
                            {`${endTime?.hours ?? '- -'}:${endTime?.minutes ?? '- -'}`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
  )
}
