declare module "aws-event-mocks" {
  export default function createEvent(config: EventConfig): AWSConfig
}

interface EventConfig {
  template:
    | 'aws:sns'
    | 'aws:sqs'
    | 'aws:apiGateway'
    | 'aws:scheduled'
    | 'aws:s3'
    | 'aws:kinesis'
  merge: AWSConfig
}

interface AWSConfig {
    [key: string]: any
}