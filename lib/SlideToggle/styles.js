import colors from '../subatomic/colors';
import spacing from '../subatomic/spacing';


export default {
    switch: {
        position: 'relative',
        display: 'inline-block',
        width: '38px',
        height: '24px',
        '& input': { 
            opacity: 0,
            width: 0,
            height: 0,
          },
      },
      slider: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ccc',
        transition: '.4s',
        borderRadius: '34px',
        '&:before': {
            position: 'absolute',
            content: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik01LjQzOCA0TDQgNS40MzhsNi42NTIgNi42NTItNi40NzIgNi40NzJMNS42MTcgMjBsNi40NzMtNi40NzIgNi4yOTMgNi4yOTIgMS40MzgtMS40MzctNi4yOTMtNi4yOTNMMjAgNS42MTdsLTEuNDM4LTEuNDM4LTYuNDcyIDYuNDcyeiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPC9tYXNrPiAgICAgICAgPHVzZSBmaWxsPSIjRUZGMEYxIiB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPGcgZmlsbD0iI0FBQUFBQSIgbWFzaz0idXJsKCNiKSI+ICAgICAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+")`,
            height: '20px',
            width: '20px',
            left: '2px',
            bottom: '2px',
            backgroundColor: 'white',
            transition: '.4s',
            textAlign: 'center',
            borderRadius: '50%',
          },
      },
      sliderCkecked: {
        backgroundColor: colors.prim,
        '&:before': {
            content: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0xOC4yOCA3LjMwNmwxLjQ0IDEuMzg4LTguNjgxIDlhMSAxIDAgMCAxLTEuMzYzLjA3MWwtNC4zMi0zLjYzIDEuMjg3LTEuNTMxIDMuNjA1IDMuMDMgOC4wMzItOC4zMjh6Ii8+ICAgIDwvZGVmcz4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+ICAgICAgICA8L21hc2s+ICAgICAgICA8dXNlIGZpbGw9IiM5Nzk3OTciIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2EiLz4gICAgICAgIDxnIGZpbGw9IiMwODNjYWUiIG1hc2s9InVybCgjYikiPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiLz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==")`,
            transform: 'translateX(14px)',
          }
      },
    cont: {
        paddingTop:spacing.tiny,
        paddingBottom:spacing.tiny,
        boxSizing:'border-box',
        display:'flex',
        alignItems:'start',
        cursor:'pointer',
        outline:'0',
        '&:after': {
            content:'',
            display:'table',
            clear:'both'
        },
    },
    
    disabled: {
        opacity:0.4,
        pointerEvents:'none'
    },
    label: {
        marginLeft:spacing.tiny,
        cursor:'pointer',
        float:'left',
        flex:'1'
    },
};
