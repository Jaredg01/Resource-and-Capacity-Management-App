# Components

This directory contains reusable React components for the application.

## Structure

Organize components by feature or type:

```
components/
├── ui/                    # Basic UI components
│   ├── Button.js
│   ├── Card.js
│   └── Input.js
├── resources/             # Resource-related components
│   ├── ResourceCard.js
│   ├── ResourceList.js
│   └── ResourceForm.js
├── activities/            # Activity-related components
│   ├── ActivityCard.js
│   ├── ActivityList.js
│   └── ActivityForm.js
└── dashboard/             # Dashboard components
    ├── StatsCard.js
    └── Chart.js
```

## Usage

Import components using the `@/components` alias:

```javascript
import { ResourceCard } from '@/components/resources/ResourceCard';
import { Button } from '@/components/ui/Button';
```
